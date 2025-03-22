import React from "react";

export default function Card({object}) {
    let{emogy,h2,desc,formats} = object
  return (
    <article >
      <div >
        {emogy}
      </div>
      <h2 >
        {h2}
      </h2>
      <p >
        {desc}
      </p>
      <div>
        <p >
          {formats}
          <span></span>
        </p>
      </div>
    </article>
  );
}
