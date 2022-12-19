import dollar from '../assets/icon-dollar.svg';
import person from '../assets/icon-person.svg';
const form = () => {
  return (
    <>
      <div className="form">
        <div className="label-group">
          <label htmlFor="bill">Bill</label>
          <input type="number" id="bill" />
          <img src={dollar} aria-hidden="true" className="icon" />
        </div>
        <div className="tip-section">
          <input type="radio" name="tip" value=".05" />
          <div className="tip-btn">5%</div>
        </div>

        <div className="tip-amount">
          <input type="radio" name="tip" value=".05" />
          <div className="tip-btn">10%</div>
        </div>
        <div className="tip-amount">
          <input type="radio" name="tip" value=".05" />
          <div className="tip-btn">15%</div>
        </div>
        <div className="tip-amount">
          <input type="radio" name="tip" value=".05" />
          <div className="tip-btn">25%</div>
        </div>
        <div className="tip-amount">
          <input type="radio" name="tip" value=".05" />
          <div className="tip-btn">50%</div>
        </div>
        <input type="number" className="tip-custom" />
      </div>
      <div className="label-group">
        <div className="label-wrapper">
          <label htmlFor="people">Number of People</label>
          <p>Error</p>
        </div>
        <input type="number" id="people" />
        <img src={person} aria-hidden="true" className="person" />
      </div>
    </>
  );
};

export default form;
