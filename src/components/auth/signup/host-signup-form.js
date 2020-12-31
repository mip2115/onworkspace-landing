import React, { useEffect, useState } from "react";

const InputTextField = (props) => {
  const {
    handleSignupFormInput,
    placeholder,
    errMsg,
    fieldId,
    disableErrorInputField,
  } = props;
  const onBlur = (e) => {};
  const onFocus = (e) => {
    if (errMsg) {
      disableErrorInputField(fieldId);
    }
  };

  const handleChange = (e) => {
    const val = e.target.value;
    handleSignupFormInput(fieldId, val);
  };
  return (
    <div className="signup-form-input">
      <input
        onChange={handleChange}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={placeholder}
      />
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
  const {
    handleSignupFormInput,
    title,
    options,
    fieldId,
    disableErrorInputField,
    errMsg,
  } = props;
  const [activeOption, setActiveOption] = useState(null);

  const handleCheck = async (e) => {
    // we've attached 'index' attr to this event.
    const optionChecked = e.target.getAttribute("index");
    await setActiveOption(parseInt(optionChecked));
    handleSignupFormInput(fieldId, options[optionChecked]);
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

const SmallImageCard = (props) => {
  const { img, idx, removeSmallImageCard } = props;
  const removeImage = (e) => {
    removeSmallImageCard(idx);
  };

  console.log("image: ", img);
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className="small-card-image"
    >
      <div onClick={removeImage}>&#x2715;</div>
    </div>
  );
};

// disable error when uploading images again
const MultiImageUpload = (props) => {
  const {
    validationErrors,
    submitSignupForm,
    disableErrorInputField,
    errMsg,
    handleSignupFormInput,
    signupFormInput,
    removeSmallImageCard,
  } = props;

  const { images } = signupFormInput;
  useEffect(() => {
    const multiImageUpload = document.getElementById("multi-image-upload");

    if (images.length > 0) {
      multiImageUpload.classList.add("images-loaded");
    } else {
      if (multiImageUpload.classList.contains("images-loaded")) {
        multiImageUpload.classList.remove("images-loaded");
      }
    }
  }, [images]);
  console.log("NUM IMAGES: ");
  console.log(images.length);
  return (
    <div>
      <div id="multi-image-upload" className="multi-image-upload">
        {images.length == 0 && <p>Drag and drop files here</p>}
        {images.length > 0 &&
          images.map((e, i) => {
            return (
              <SmallImageCard
                removeSmallImageCard={removeSmallImageCard}
                idx={i}
                img={e}
                key={i}
              />
            );
          })}
        {/* <input
          className="box__file"
          type="file"
          name="files[]"
          id="file"
          data-multiple-caption="{count} files selected"
          multiple
        /> */}
      </div>

      {/* <div className="box__uploading">Uploading…</div>
        <div className="box__success">Done!</div>
        <div className="box__error">
          Error! <span></span>.
        </div> */}
      <p className="input-error-msg">{errMsg}</p>
    </div>
  );
};

const HostSignupFormP1 = (props) => {
  const {
    validationErrors,
    handleSignupFormInput,
    submitSignupForm,
    disableErrorInputField,
  } = props;
  return (
    <div className="host-signup-form-p1">
      <h3>Apply to be a host</h3>
      <InputTextField
        handleSignupFormInput={handleSignupFormInput}
        disableErrorInputField={disableErrorInputField}
        errMsg={validationErrors.NAME_ERROR}
        fieldId="name"
        placeholder="name"
      />
      <InputTextField
        handleSignupFormInput={handleSignupFormInput}
        disableErrorInputField={disableErrorInputField}
        errMsg={validationErrors.EMAIL_ERROR}
        fieldId="email"
        placeholder="email"
      />
      <InputTextField
        handleSignupFormInput={handleSignupFormInput}
        disableErrorInputField={disableErrorInputField}
        errMsg={validationErrors.MOBILE_ERROR}
        fieldId="mobile"
        placeholder="mobile"
      />
      <InputTextField
        handleSignupFormInput={handleSignupFormInput}
        disableErrorInputField={disableErrorInputField}
        errMsg={validationErrors.LOCATION_ERROR}
        fieldId="location"
        placeholder="where is your workspace? (e.g. New York, NY)"
      />
      <InputCheckboxFields
        handleSignupFormInput={handleSignupFormInput}
        options={["Yes", "Usually", "Sometimes", "No"]}
        title="Do you work from home?"
        disableErrorInputField={disableErrorInputField}
        errMsg={validationErrors.SCHEDULE_ERROR}
        fieldId="schedule"
      />
      {/* <InputCheckboxFields
        handleSignupFormInput={handleSignupFormInput}
        options={["Yes", "No"]}
        title="Can you provide WiFi, outlets, coffee  and tea?"
        disableErrorInputField={disableErrorInputField}
        errMsg={validationErrors.AMENITIES_ERROR}
        fieldId="amenities"
      /> */}
    </div>
  );
};

// https://www.smashingmagazine.com/2018/01/drag-drop-file-uploader-vanilla-js/
const HostSignupFormP2 = (props) => {
  const {
    handleSignupFormInput,
    validationErrors,
    disableErrorInputField,
    signupFormInput,
    removeSmallImageCard,
  } = props;
  return (
    <div className="host-signup-form-p2">
      <InputTextArea
        validationErrors={validationErrors}
        disableErrorInputField={disableErrorInputField}
        fieldId="blurb"
        errMsg={validationErrors.BLURB_ERROR}
        placeholder="write a small blurb about your workspace"
      />
      <MultiImageUpload
        removeSmallImageCard={removeSmallImageCard}
        signupFormInput={signupFormInput}
        validationErrors={validationErrors}
        disableErrorInputField={disableErrorInputField}
        fieldId="images"
        errMsg={validationErrors.IMAGES_ERROR}
      />
    </div>
  );
};

const HostSignupForm = (props) => {
  const { handleSignupFormInput } = props;

  const [images, setImages] = useState([]);
  const initListeners = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  // upload to state here
  const onLoadCallback = async (e) => {
    handleSignupFormInput("images", e.target.result);
  };

  const onLoadStart = async (e) => {
    console.log("STARTING THE UPLOAD");
  };
  const onLoadEnd = async (e) => {
    console.log("FINISHED THE UPLOAD");
  };

  const onProgress = async (e) => {
    console.log("LOADED ", e.loaded);
    console.log("total: ", e.total);
    console.dir(e);
  };

  const onError = async (e) => {
    console.log("there was an error");
    // see if you can check what the alert was.
    // you should make a popup or something that there
    // was an error loading files
    // handleSignupFormInput("images", e.target.result);
  };

  const handleMultiImageDrop = (e) => {
    e.preventDefault(); // can prob get rid of this?
    const filesToUpload = e.dataTransfer.files;
    for (let i = 0; i < filesToUpload.length; i++) {
      const reader = new FileReader();

      // load drag and drop images to here
      reader.onload = onLoadCallback;
      reader.onloadend = onLoadEnd;
      reader.onloadstart = onLoadStart;
      reader.onprogress = onProgress;
      const file = filesToUpload[i];
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const multiImageUpload = document.getElementById("multi-image-upload");
    [
      "drag",
      "dragstart",
      "dragend",
      "dragover",
      "dragenter",
      "dragleave",
      "drop",
    ].forEach((evt) => {
      multiImageUpload.addEventListener(evt, initListeners, false);
    });
    multiImageUpload.addEventListener("drop", handleMultiImageDrop);
    multiImageUpload.addEventListener("dragover", (e) => {
      console.log("I AM DRAGOVER 1 ");
      multiImageUpload.classList.add("is-dragover");
    });
    multiImageUpload.addEventListener("dragenter", (e) => {
      console.log("I AM DRAGENGER ");
      multiImageUpload.classList.add("is-dragover");
    });

    multiImageUpload.addEventListener("dragleave", (e) => {
      console.log("I AM DRAGLEAVE ");
      if (multiImageUpload.classList.contains("is-dragover")) {
        multiImageUpload.classList.remove("is-dragover");
      }
    });
    multiImageUpload.addEventListener("dragend", (e) => {
      console.log("I AM DRAGEND ");
      if (multiImageUpload.classList.contains("is-dragover")) {
        multiImageUpload.classList.remove("is-dragover");
      }
    });
    multiImageUpload.addEventListener("drop", (e) => {
      console.log("I AM DROP ");
      if (multiImageUpload.classList.contains("is-dragover")) {
        multiImageUpload.classList.remove("is-dragover");
      }
    });
  }, []);

  const {
    validationErrors,
    submitSignupForm,
    disableErrorInputField,
    isLoading,
  } = props;
  return (
    <div className="host-sign-up-form">
      {/* <h3>Apply to be a host</h3> */}
      <div className="host-sign-up-ctr">
        <HostSignupFormP1 {...props} />

        <HostSignupFormP2 {...props} />
      </div>

      {/* <div onClick={submitSignupForm} className="signup-form-btn">
        {!isLoading ? (
          <div className="signup-form-btn-submit">Submit</div>
        ) : (
          <div className="loading-btn">
            <div id="loading-btn-spinner" className="loading-btn-spinner"></div>
          </div>
        )}
      </div> */}
    </div>
  );
};
export default HostSignupForm;
