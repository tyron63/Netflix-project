import React, { Component } from 'react';
import { Tabs } from 'react-tabs';

//Tabs Content
import TabContentOne from './Tab_Component/TabContentOne';
import TabContentTwo from './Tab_Component/TabContentTwo';
import TabContent3 from './Tab_Component/TabContent3';

// Css
import '../css/TabsNav.css';

class TabComponent extends Component {
  render() {
    return (
      <div>
        <Tabs>
          <TabContentOne />
          <div className="line-ff"></div>
          <TabContentTwo />
          <div className="line-ff"></div>
          <TabContent3 />
          <div className="line-ff"></div>
        </Tabs>
      </div>
    );
  }
}

export default TabComponent;
