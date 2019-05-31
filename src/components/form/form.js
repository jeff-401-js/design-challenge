import React from 'react';

import './form.scss';

const handleSubmit = e => e.preventDefault();

const Form = props => {
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Input</legend>
        <label>
          <span>Your Name</span>
          <input placeholder="Your Name" type="text" />
        </label>
      </fieldset>
      <fieldset>
        <legend>Password</legend>
        <label>
          <span>Your Password</span>
          <input type="password" />
        </label>
      </fieldset>
      <fieldset>
        <legend>Telephone</legend>
        <label>
          <span>Phone Number</span>
          <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
        </label>
      </fieldset>
      <fieldset>
        <legend>URL</legend>
        <label>
          <span>URL</span>
          <input type="url" />
        </label>
      </fieldset>
      <fieldset>
        <legend>Email</legend>
        <label>
          <span>Email</span>
          <input type="email" />
        </label>
      </fieldset>
      <fieldset>
        <legend>Number</legend>
        <label>
          <span>Num</span>
          <input placeholder="4" type="number" />
        </label>
      </fieldset>
      <fieldset>
        <legend>Time</legend>
        <label>
          <span>Time</span>
          <input type="time" />
        </label>
      </fieldset>
      <fieldset>
        <legend>Week</legend>
        <label>
          <span>Week</span>
          <input type="week" />
        </label>
      </fieldset>
      <fieldset>
        <legend>Month</legend>
        <label>
          <span>Month</span>
          <input type="month" />
        </label>
      </fieldset>
      <fieldset>
        <legend>Date</legend>
        <label>
          <span>Date</span>
          <input type="date" />
        </label>
      </fieldset>
      <fieldset>
        <legend>Color</legend>
        <label>
          <span>Color</span>
          <input type="color" />
        </label>
      </fieldset>
      button color date month password search url week
      <fieldset>
        <legend>Range</legend>
        <label>
          <span>How Many</span>
          <input type="range" min="1" max="10" />
        </label>
      </fieldset>
      <fieldset>
        <legend>Textarea</legend>
        <label>
          <span>A bunch of words</span>
          <textarea placeholder="type some words here" />
        </label>
      </fieldset>
      <fieldset>
        <legend>Select</legend>
        <label>
          <span>Pick One</span>
          <select>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
            <option value="Option 4">Option 4</option>
          </select>
        </label>
      </fieldset>
      <fieldset>
        <legend>Select Some</legend>
        <label>
          <span>Pick A Few</span>
          <select multiple>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
            <option value="Option 4">Option 4</option>
          </select>
        </label>
      </fieldset>
      <fieldset>
        <legend>Radio Buttons</legend>
        <label>
          <input name="rb" type="radio" value="a" />
          <span>Option A</span>
        </label>
        <label>
          <input name="rb" type="radio" value="a" />
          <span>Option B</span>
        </label>
        <label>
          <input name="rb" type="radio" value="a" />
          <span>Option C</span>
        </label>
      </fieldset>
      <fieldset>
        <legend>Checkboxes</legend>
        <label>
          <input name="cb" type="checkbox" value="a" />
          <span>Option A</span>
        </label>
        <label>
          <input name="cb" type="checkbox" value="a" />
          <span>Option B</span>
        </label>
        <label>
          <input name="cb" type="checkbox" value="a" />
          <span>Option C</span>
        </label>
      </fieldset>
      <fieldset className="address">
        <legend>Address</legend>
        <label>
          <input placeholder="Name" name="name" type="text" />
        </label>
        <label>
          <input placeholder="Address Line 1" name="address1" type="text" />
        </label>
        <label>
          <input placeholder="Address Line 2" name="address2" type="text" />
        </label>
        <label>
          <input placeholder="City" name="city" type="text" />
        </label>
        <label>
          <select name="state">
            <option value="">State</option>
            <option value="WA">Washington</option>
            <option value="NJ">New Jersey</option>
          </select>
        </label>
        <label>
          <input placeholder="zip" name="zip" type="text" />
        </label>
      </fieldset>
      <fieldset>
        <button>Button</button>
        <input type="submit" value="Submit" />
        <input type="reset" value="Reset" />
      </fieldset>
    </form>
  );
};

export default Form;
