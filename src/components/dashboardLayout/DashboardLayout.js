import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import styles from './DashboardLayout.module.scss'

const DashboardLayout = ({ children }) => {
  return (
    <div className={styles.dashboardLayoutContainer}>
      <div className={styles.multiStepFormSection}>
        <h2 className={styles.multiStepFormSectionH2}>Multi-step Form V1</h2>
      </div>

      <div className={styles.dashboardLayout}>
        <Sidebar/>
        {children}  
      </div>
    </div>
  )
}

export default DashboardLayout
