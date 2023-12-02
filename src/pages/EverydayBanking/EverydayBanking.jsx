import React, { useState } from 'react';
import './style.css'; // Import your styling for the tab card
import Payment from '../../components/EverydayBanking/Payment';

const EverydayBanking = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="tab-card">
      <div className="tabs">
        <div className={`tab ${activeTab === 1 ? 'active' : ''}`} onClick={() => handleTabClick(1)}>Payment</div>
        <div className={`tab ${activeTab === 2 ? 'active' : ''}`} onClick={() => handleTabClick(2)}>Calculator</div>
      </div>
      {/* Content for each tab */}
      <div className="tab-content">
        {activeTab === 1 && <Payment/> }
        {activeTab === 2 && <p>This is the content for Tab 2.</p>}
      </div>
    </div>
  );
};

export default EverydayBanking;
