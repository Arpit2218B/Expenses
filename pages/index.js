import { useEffect, useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import BaseAmount from '../components/BaseAmount'
import Expenses from '../components/Expenses'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [data, setData] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [updated, setUpdated] = useState(true);

  useEffect(async () => {
      const URL = 'https://api.airtable.com/v0/app7QZH4jTDfsrfbI/source?api_key=keyNpEof0EQueF0sv';
      const res = await fetch(URL);
      const data = await res.json();
      setData(data.records);
      console.log(data.records);
  }, [updated]);

  useEffect(async () => {
    const URL = 'https://api.airtable.com/v0/app7QZH4jTDfsrfbI/expenses?api_key=keyNpEof0EQueF0sv';
    const res = await fetch(URL);
    const data = await res.json();
    setExpenses(data.records);
}, [updated]);

  const addExpense = async (date, category, source, amount, description) => {
    const URL = 'https://api.airtable.com/v0/app7QZH4jTDfsrfbI/expenses?api_key=keyNpEof0EQueF0sv';
    const body = {
        "records": [
          {
            "fields": {
              "Date": date,
              "Category": category,
              "Source": source,
              "Amount": amount,
              "Description": description
          }
        }
      ]
    }

    const res = await fetch(URL, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    await updateBase(source, amount);

    setUpdated(!updated);
  }

  const updateBase = async (source, amount) => {
    let id = '';
    let newAmount = 1;

    switch (source) {
      case "sbi":
        id = "recp6kDaDuVW9snZv";
        break;
      case "ub":
        id = "recCmb4WG6vDUGNZz";
        break;
      case "kotak":
        id = "recvr0fKTCdAuKyTt";
        break;
      case "cash":
        id = "rec63a9OfpUGtolqg";
        break;
    }

    const URL1 = `https://api.airtable.com/v0/app7QZH4jTDfsrfbI/source/${id}`;
    const res1 = await fetch(URL1, {
      method: 'GET',
      headers: {
        Authorization: "Bearer keyNpEof0EQueF0sv"
      }
    });
    const data1 = await res1.json();
    console.log(data1);
    newAmount = data1.fields.Amount - amount;

    const URL = 'https://api.airtable.com/v0/app7QZH4jTDfsrfbI/source?api_key=keyNpEof0EQueF0sv';
    const body = {
        "records": [
          {
            "id": id,
            "fields": {
              "Source": source,
              "Amount": newAmount
          }
        }
      ]
    }
    

    const res = await fetch(URL, {
      method: 'PATCH',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  return (
    <div className={styles.container}>
      <BaseAmount data={data} />
      <Expenses expenses={expenses} addExpense={addExpense} />
    </div>
  )
}
