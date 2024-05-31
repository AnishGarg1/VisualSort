import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setArr, setSorting } from '../../redux/slices/arraySlice';

const Quick = () => {
    const dispatch = useDispatch();
    const { arr, sorting } = useSelector((state) => state.array);

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const quickSort = async () => {
      let currArr = [...arr];
      await solve(currArr, 0, currArr.length-1);
      // dispatch(setArr([...currArr]));
      dispatch(setSorting(false));
    }
    
    const solve = async (currArr, i, j) => {
      if(i>=j){
        return;
      }
      let p = await partition(currArr, i, j);
      await solve(currArr, i, p-1);
      await solve(currArr, p+1, j);
    }
    
    const partition = async (currArr, s, e) => {
      let pivot = currArr[s];
      let count = 0;
      for(let i=s+1; i<=e; i++){
        if(currArr[i]<=pivot){
          count++;
        }
      }
      let pi = s + count;
      let temp = currArr[s];
      currArr[s] = currArr[pi];
      currArr[pi] = temp;
      
      let i=s; let j=e;
      while(i<pi && j>pi){
        while(currArr[i]<=pivot){
          i++;
        }
        while(currArr[j]>pivot){
          j--;
        }
        
        if(i<pi && j>pi){
          let temp = currArr[i];
          currArr[i] = currArr[j];
          currArr[j] = temp;
          dispatch(setArr([...currArr]));
          await sleep(500);
          i++; j--;
        }
      }
      
      dispatch(setArr([...currArr]));
      await sleep(500);

      return pi;
    }

    useEffect(() => {
        if(sorting){
            quickSort();
        }
    }, [sorting])

  return (
    <></>
  )
}

export default Quick