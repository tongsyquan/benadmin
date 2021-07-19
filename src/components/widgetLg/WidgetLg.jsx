import React from "react";
import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="sidgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://scontent-sin6-3.xx.fbcdn.net/v/t1.6435-9/82962498_1499171823569064_6725254418519818240_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=174925&_nc_ohc=RQkNajlmkJoAX-5jgUk&_nc_ht=scontent-sin6-3.xx&oh=96d1443d12cd1b481d33e3067bda7457&oe=60F2DB19"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Michelin</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="sidgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://scontent-sin6-3.xx.fbcdn.net/v/t1.6435-9/82962498_1499171823569064_6725254418519818240_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=174925&_nc_ohc=RQkNajlmkJoAX-5jgUk&_nc_ht=scontent-sin6-3.xx&oh=96d1443d12cd1b481d33e3067bda7457&oe=60F2DB19"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Michelin</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="sidgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://scontent-sin6-3.xx.fbcdn.net/v/t1.6435-9/82962498_1499171823569064_6725254418519818240_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=174925&_nc_ohc=RQkNajlmkJoAX-5jgUk&_nc_ht=scontent-sin6-3.xx&oh=96d1443d12cd1b481d33e3067bda7457&oe=60F2DB19"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Michelin</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="sidgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://scontent-sin6-3.xx.fbcdn.net/v/t1.6435-9/82962498_1499171823569064_6725254418519818240_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=174925&_nc_ohc=RQkNajlmkJoAX-5jgUk&_nc_ht=scontent-sin6-3.xx&oh=96d1443d12cd1b481d33e3067bda7457&oe=60F2DB19"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Michelin</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
