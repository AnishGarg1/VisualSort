import { current } from '@reduxjs/toolkit';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setArr, setSorting } from '../../redux/slices/arraySlice';

const Merge = () => {
    const dispatch = useDispatch();
    const { arr, sorting } = useSelector((state) => state.array);

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const mergeSort = async () => {
        let currArr = [...arr];
        await solve(currArr, 0, currArr.length-1);
        // dispatch(setArr([...currArr]));
        dispatch(setSorting(false));
    }

    const solve = async (currArr, i, j) => {
        if(i>=j){
            return;
        }
        let mid = Math.floor((i+j)/2);
        await  solve(currArr, i, mid);
        await solve(currArr, mid+1, j);
        await merge(currArr, i, mid, j);
    }

    const merge = async (currArr, s, mid, e) => {
        let temp = [];
        let i = s;
        let j = mid+1;
        let k = 0;
        while(i<=mid && j<=e){
            if(currArr[i]<currArr[j]){
                temp[k] = currArr[i];
                k++; i++;
            }
            else{
                temp[k] = currArr[j];
                k++; j++;
            }
        }
        while(i<=mid){
            temp[k] = currArr[i];
            k++; i++;
        }
        while(j<=e){
            temp[k] = currArr[j];
            k++; j++;
        }
        i = 0;
        for(k=s; k<=e; k++){
            currArr[k] = temp[i++];
            dispatch(setArr([...currArr]));
            await sleep(500);
        }
        dispatch(setArr([...currArr]));
    }
    
    useEffect(() => {
        if(sorting){ 
            mergeSort();
        }
    }, [sorting]);
    
    return (
        <></>
    )
}

export default Merge