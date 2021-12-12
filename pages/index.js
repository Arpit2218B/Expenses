import { useEffect, useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import BaseAmount from '../components/BaseAmount'
import Expenses from '../components/Expenses'
import styles from '../styles/Home.module.scss'

export default function Home() {

  const [data, setData] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [updated, setUpdated] = useState(true);
  const [key, setKey] = useState(false);
  const [passcode, setPasscode] = useState('');

  useEffect(async () => {
    if(!key)
      return
    const URL = 'https://api.airtable.com/v0/app7QZH4jTDfsrfbI/source?api_key=keyNpEof0EQueF0sv';
    const res = await fetch(URL);
    const data = await res.json();
    setData(data.records);
    console.log(data.records);
  }, [updated, key]);

  useEffect(async () => {
    if(!key)
      return;
    const URL = 'https://api.airtable.com/v0/app7QZH4jTDfsrfbI/expenses?sort%5B0%5D%5Bfield%5D=Date&sort%5B0%5D%5Bdirection%5D=desc&api_key=keyNpEof0EQueF0sv';
    const res = await fetch(URL);
    const data = await res.json();
    setExpenses(data.records);
}, [updated, key]);

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

  const handleKey = (e) => {
    if(passcode === 'Jaisalmer@1234')
      setKey(true);
  }

  const logout = () => {
    setKey(false);
    setPasscode('');
  }

  return (
    <div className={styles.container}>
      {key ? (
        <>
          <BaseAmount data={data} logout={logout} />
          <Expenses expenses={expenses} addExpense={addExpense} />
        </>
      ) : (
        <div className={styles.container}>
          <h1 className={styles.h1}>
                <span>
                    Expense Tracker
                </span>
            </h1>
          <input className={styles.input} type="password" placeholder="Enter passcode to view application" value={passcode} onChange={(e) => setPasscode(e.target.value)}></input>
          <button className={styles.button} onClick={handleKey}>Submit</button>
        </div>
      )}
    </div>
  )
}
