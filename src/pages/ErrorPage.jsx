import React, { useEffect } from 'react'
import ErrorNavbar from '../components/ErrorNavbar'
import Footer from '../components/Footer'
import './ErrorPage.scss'

export default function ErrorPage() {
  useEffect(() => {
    const favicon = document.getElementById('favicon')
    favicon.href = 'https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico'

    document.title = 'Page Not Found | Facebook'

    document.body.style.overflowY = 'hidden'
    document.documentElement.scrollTop = 0
  }, [])

  return (
    <div className='.errorPage'>
      <ErrorNavbar />
      <Footer isErrorFooter />
    </div>
  )
}
