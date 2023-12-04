'use client'
import RutasProtegidas from "@/components/dashboards/RutasProtegidas"

export default function Layout({ children }) {
    return (
      <html lang="en">
        <body>
        <RutasProtegidas allowedRoles={["admin"]}>
  
         
          {children}
          
          
        </RutasProtegidas>
          </body>
      </html>
    )
  }




