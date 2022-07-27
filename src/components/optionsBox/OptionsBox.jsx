import React from "react";
import "../../sass/components/_optionsBox.scss";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../features/searchSlice";

const OptionsBox = ({ type }) => {
  const search = useSelector((state) => state.search.options);
  const dispatch = useDispatch();

  return (
    
      <div className="options">
        {search.map((option) => {
          return (
            <>
              <div className="optionItem" key={option.id}>
                <span>{option.name}</span>
                <div className="optionSelect">
                  {/* Conditionally renders button according to type of option */}
                  {/* When the option type is children I want it to render a specific logic */}

                  {option.name === "children" ? (
                    <button
                      onClick={() => dispatch(decrement(option.id))}
                      className={`${
                        option.qtd <= 0 ? "btn notAllowed" : "btn"
                      }`}
                      disabled={option.qtd <= 0 ? true : false}
                    >
                      -
                    </button>
                  ) : (
                    <button
                      onClick={() => dispatch(decrement(option.id))}
                      className={`${
                        option.qtd <= 1 ? "btn notAllowed" : "btn"
                      }`}
                      disabled={option.qtd <= 1 ? true : false}
                    >
                      -
                    </button>
                  )}

                  <p>{option.qtd}</p>
                  <button
                    onClick={() => dispatch(increment(option.id))}
                    className="btn"
                  >
                    +
                  </button>
                </div>
              </div>
            </>
          );
        })}
        {type === "list" && <button className="optionBtn">Done</button>}
      </div>
    
  );
};

export default OptionsBox;
