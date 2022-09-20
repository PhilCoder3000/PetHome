import { useEffect } from 'react'

export function useInterval(callback: () => void, timeout: number | null) {
  useEffect(() => {
    let interval: NodeJS.Timer;
    
    if (timeout) {
      interval = setInterval(callback, timeout)
    }
  
    return () => {
      clearInterval(interval)
    }
  }, [callback, timeout])
  
}
