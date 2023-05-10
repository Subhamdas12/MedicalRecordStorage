import React, { useEffect, useRef } from "react";
import "./alert.css";
import { useSelector } from "react-redux";
import { myEventsSelector } from "../../store/selectors";
import config from "../../config.json";
const Alert = () => {
  const alertRef = useRef(null);
  const event = useSelector(myEventsSelector);
  const overlayRef = useRef(null);
  const isPending = useSelector((state) => state.medical.transaction.isPending);
  const isError = useSelector((state) => state.medical.transaction.isError);
  const chainId = useSelector((state) => state.provider.chainId);
  const removeHandler = async (e) => {
    alertRef.current.className = "alertBox--remove";
    overlayRef.current.className = "overlay--remove";
  };
  useEffect(() => {
    if (isPending) {
      alertRef.current.className = "alertBox";
      overlayRef.current.className = "overlay";
    }
  }, [isPending]);
  return (
    <div>
      {isPending ? (
        <div className="alert" onClick={removeHandler}>
          <div className="overlay--remove" ref={overlayRef}></div>
          <div className=" alertBox--remove " ref={alertRef}>
            <h2>Action Pending...</h2>
          </div>
        </div>
      ) : isError ? (
        <div className="alert" onClick={removeHandler}>
          <div className="overlay--remove" ref={overlayRef}></div>
          <div className=" alertBox--remove " ref={alertRef}>
            <h2>Action Will Fail</h2>
          </div>
        </div>
      ) : !isPending && event[0] ? (
        <div className="alert" onClick={removeHandler}>
          <div className="overlay--remove" ref={overlayRef}></div>
          <div className=" alertBox--remove " ref={alertRef}>
            <h2>Action Successful</h2>
            <div className="transactionHashOut">
              <a
                className="transactionHash"
                href={
                  config[chainId]
                    ? `${config[chainId].explorerURL}tx/${event[0].transactionHash}`
                    : `#`
                }
                target="_blank"
                rel="noreferrer"
              >
                {event[0].transactionHash.slice(0, 6) +
                  "..." +
                  event[0].transactionHash.slice(60, 66)}
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Alert;
