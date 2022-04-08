import React from "react";
import Notifcationtile from "../Notification tile/Notificationtile";

const NotificatinModal = () => {
  return (
    <div className="absolute top-32 right-450px w-464px text-deepblue drop-shadow-xl bg-white rounded-xl">
      <div className=" flex flex-col divide-y-2">
        <Notifcationtile />
        <Notifcationtile />
        <Notifcationtile />
        <Notifcationtile />
        <Notifcationtile />

        <div className="ml-8 flex justify-between py-9 pr-28">
          <a className="text-primary font-bold text-sm" href="">
            View all Notifications
          </a>
          <button className="text-logotext font-bold text-sm">
            Mark all as read
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificatinModal;
