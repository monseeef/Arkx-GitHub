import React from "react";

function Email({ name }) {
  // Assuming a recovery time for illustration
  const recoveryHours = () => 24;

  const paragraph1 = () => (
    <p id="paragraph1" className="p1">
      Hi {name},
    </p>
  );

  const paragraph2 = () => (
    <p id="paragraph2" className="p2">
      I wanted to let you know as soon as possible that I will be staying home
      from work today. Unfortunately, I developed a stomach bug that has made it
      very difficult to get work done.
    </p>
  );

  const paragraph3 = () => (
    <p id="paragraph3" className="p3">
      I went to urgent care last night and was told it should subside within{" "}
      {recoveryHours()} hours. I do not expect to be online throughout the day.
      While I do plan to be back in the office tomorrow, I’ve asked Kelly to
      take over for me today in case any emergencies arise. I had an important
      call scheduled with a supplier, but Daniel has agreed to manage the
      meeting.
    </p>
  );

  const paragraph4 = () => (
    <p id="paragraph4" className="p4">
      Please let me know of any additional steps you’d like me to take to ensure
      the day runs as smoothly as possible in my absence.
    </p>
  );

  const paragraph5 = () => (
    <p id="paragraph5" className="p5">
      Thank you, {name}
    </p>
  );

  return (
    <div>
      {paragraph1()}
      {paragraph2()}
      {paragraph3()}
      {paragraph4()}
      {paragraph5()}
    </div>
  );
}

export default Email;
