import { Visibility } from "@material-ui/icons";
import React from "react";
import "./widgetSm.css";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://scontent-sin6-3.xx.fbcdn.net/v/t1.6435-9/82962498_1499171823569064_6725254418519818240_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=174925&_nc_ohc=RQkNajlmkJoAX-5jgUk&_nc_ht=scontent-sin6-3.xx&oh=96d1443d12cd1b481d33e3067bda7457&oe=60F2DB19"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Micheal Scofield</span>
            <span className="widgetSmUserTitle">Architecture Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://scontent-sin6-3.xx.fbcdn.net/v/t1.6435-9/82962498_1499171823569064_6725254418519818240_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=174925&_nc_ohc=RQkNajlmkJoAX-5jgUk&_nc_ht=scontent-sin6-3.xx&oh=96d1443d12cd1b481d33e3067bda7457&oe=60F2DB19"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Lincol Borrow</span>
            <span className="widgetSmUserTitle">Freelancer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://scontent-sin6-3.xx.fbcdn.net/v/t1.6435-9/82962498_1499171823569064_6725254418519818240_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=174925&_nc_ohc=RQkNajlmkJoAX-5jgUk&_nc_ht=scontent-sin6-3.xx&oh=96d1443d12cd1b481d33e3067bda7457&oe=60F2DB19"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Alex Mahone</span>
            <span className="widgetSmUserTitle">Spectre</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://scontent-sin6-3.xx.fbcdn.net/v/t1.6435-9/82962498_1499171823569064_6725254418519818240_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=174925&_nc_ohc=RQkNajlmkJoAX-5jgUk&_nc_ht=scontent-sin6-3.xx&oh=96d1443d12cd1b481d33e3067bda7457&oe=60F2DB19"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Sara Tancredi</span>
            <span className="widgetSmUserTitle">Doctor</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://scontent-sin6-3.xx.fbcdn.net/v/t1.6435-9/82962498_1499171823569064_6725254418519818240_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=174925&_nc_ohc=RQkNajlmkJoAX-5jgUk&_nc_ht=scontent-sin6-3.xx&oh=96d1443d12cd1b481d33e3067bda7457&oe=60F2DB19"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Sucre</span>
            <span className="widgetSmUserTitle">Freelancer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
