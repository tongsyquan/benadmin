import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Benadmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBag">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBag">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://scontent-xsp1-1.xx.fbcdn.net/v/t1.6435-9/129598789_1804277886391788_3205979701051126998_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=UPkvsgYt_bMAX8cdsRe&_nc_ht=scontent-xsp1-1.xx&oh=2e031cb3e1056994a4b1d3d3f64ff684&oe=60F0E11D"
            alt="avt"
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
