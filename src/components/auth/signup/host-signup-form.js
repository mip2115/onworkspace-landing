import React, { useState } from "react";

// // you should have a second page.

const InputTextField = (props) => {
  const { placeholder, errMsg, fieldId, disableErrorInputField } = props;
  const onBlur = (e) => {};
  const onFocus = (e) => {
    if (errMsg) {
      disableErrorInputField(fieldId);
    }
  };
  return (
    <div className="signup-form-input">
      <input onFocus={onFocus} onBlur={onBlur} placeholder={placeholder} />
      <p className="input-error-msg">{errMsg}</p>
    </div>
  );
};

const InputTextArea = (props) => {
  const { placeholder, errMsg, fieldId, disableErrorInputField } = props;
  const onBlur = (e) => {};
  const onFocus = (e) => {
    const fieldToDisable = e.target.id;
    if (errMsg) {
      disableErrorInputField(fieldId);
    }
  };
  return (
    <div className="textarea-input">
      <textarea
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={placeholder}
        rows="4"
      />
      <p className="input-error-msg">{errMsg}</p>
    </div>
  );
};

const InputCheckbox = (props) => {
  const { label, handleCheck, index, activeOption } = props;

  return (
    <div className="checkbox-input">
      <div
        onClick={handleCheck}
        index={index}
        className={
          index == activeOption
            ? "checkbox-input-box checkbox-clicked"
            : "checkbox-input-box"
        }
      ></div>
      <label>{label}</label>
    </div>
  );
};

const InputCheckboxFields = (props) => {
  const { title, options, fieldId, disableErrorInputField, errMsg } = props;
  const [activeOption, setActiveOption] = useState(null);

  const handleCheck = (e) => {
    const optionChecked = e.target.getAttribute("index");
    setActiveOption(parseInt(optionChecked));
    if (errMsg) {
      disableErrorInputField(fieldId);
    }
  };

  return (
    <div className="input-checkbox-fields">
      <label>{title}</label>
      <div className="input-checkbox-fields-boxes">
        {options.map((e, i) => {
          return (
            <InputCheckbox
              handleCheck={handleCheck}
              activeOption={activeOption}
              index={i}
              key={i}
              label={e}
            />
          );
        })}
      </div>
      <p className="input-error-msg">{errMsg}</p>
    </div>
  );
};
// disable error when uploading images again
const MultiImageUpload = (props) => {
  const { validationErrors, submitSignupForm, disableErrorInputField } = props;
  return (
    <div>
      <div className="multi-image-upload">Drag and drop files here</div>
      <p className="input-error-msg">You must provide</p>
    </div>
  );
};

const HostSignupFormP1 = (props) => {
  const { validationErrors, submitSignupForm, disableErrorInputField } = props;
  return (
    <div className="host-signup-form-p1">
      <h3>Apply to be a host</h3>
      <InputTextField
        disableErrorInputField={disableErrorInputField}
        errMsg={validationErrors.NAME_ERROR}
        fieldId="name"
        placeholder="name..."
      />
      <InputTextField
        disableErrorInputField={disableErrorInputField}
        errMsg={validationErrors.EMAIL_ERROR}
        fieldId="email"
        placeholder="email..."
      />
      <InputTextField
        disableErrorInputField={disableErrorInputField}
        errMsg={validationErrors.MOBILE_ERROR}
        fieldId="mobile"
        placeholder="mobile..."
      />
      <InputTextField
        disableErrorInputField={disableErrorInputField}
        errMsg={validationErrors.LOCATION_ERROR}
        fieldId="location"
        placeholder="where is your space? (e.g. New York, NY)"
      />
      <InputCheckboxFields
        options={["Yes", "Usually", "Sometimes", "No"]}
        title="Do you work from home?"
        disableErrorInputField={disableErrorInputField}
        errMsg={validationErrors.SCHEDULE_ERROR}
        fieldId="schedule"
      />
      <InputCheckboxFields
        options={["Yes", "No"]}
        title="Can you provide WiFi, outlets, coffee  and tea?"
        disableErrorInputField={disableErrorInputField}
        errMsg={validationErrors.AMENITIES_ERROR}
        fieldId="amenities"
      />
    </div>
  );
};

// https://www.smashingmagazine.com/2018/01/drag-drop-file-uploader-vanilla-js/
const HostSignupFormP2 = (props) => {
  const { validationErrors, disableErrorInputField } = props;
  return (
    <div className="host-signup-form-p2">
      <InputTextArea
        validationErrors={validationErrors}
        disableErrorInputField={disableErrorInputField}
        fieldId="blurb"
        errMsg={validationErrors.BLURB_ERROR}
        placeholder="Write a small blurb about your work space..."
      />
      <MultiImageUpload
        validationErrors={validationErrors}
        disableErrorInputField={disableErrorInputField}
        fieldId="images"
        errMsg={validationErrors.IMAGES_ERROR}
      />
    </div>
  );
};

const HostSignupForm = (props) => {
  const { validationErrors, submitSignupForm, disableErrorInputField } = props;
  return (
    <div className="host-sign-up-form">
      {/* <h3>Apply to be a host</h3> */}
      <div className="host-sign-up-ctr">
        <HostSignupFormP1 {...props} />

        <HostSignupFormP2 {...props} />
      </div>
      <div onClick={submitSignupForm} className="signup-form-btn">
        <div>Submit</div>
      </div>
    </div>
  );
};
export default HostSignupForm;
