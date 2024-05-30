import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setArr, setSorting } from '../../redux/slices/arraySlice';

const Insertion = () => {
    const dispatch = useDispatch();
    const { arr, size, sorting } = useSelector((state) => state.array);

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const insertionSort = async () => {
        const currArr = [...arr];
        
        for(let i=1; i<size; i++){
            let pre = i-1;
            let ele = currArr[i];
            while(pre>=0 && currArr[pre]>ele){
                currArr[pre+1] = currArr[pre];
                pre--;
            }
            pre++;
            currArr[pre] = ele;
            
            dispatch(setArr([...currArr]));
            await sleep(500);
        }

        dispatch(setArr([...currArr]));
        dispatch(setSorting(false));
    }

    useEffect(() => {
        if(sorting){
            insertionSort();
        }
    }, [sorting])
  return (
    <></>
  )
}

export default Insertion