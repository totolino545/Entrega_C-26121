import Header from "../Header/Header"


export function Layout({childen}) {

  return (
    <div>
      <Header/>
    </div>
    {children}
  )
}
