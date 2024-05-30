import { current } from '@reduxjs/toolkit';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Merge = () => {
    const dispatch = useDispatch();
    const { arr, size, sorting } = useSelector((state) => state.array);

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const mergeSort = () => {
        let currArr = [...arr];
        solve(currArr, 0, currArr.length-1);
    }

    const solve = (currArr, i, j) => {
        if(i>=j){
            return;
        }
        let mid = (i+j)/2;
        solve(currArr, i, mid);
        solve(currArr, mid+1, j);
        merge(currArr, i, mid, j);
    }

    const merge = (current, i, mid, j) => {
        
    }

    useEffect(() => {
        mergeSort();
    }, [sorting]);

  return (
    <></>
  )
}

export default Merge