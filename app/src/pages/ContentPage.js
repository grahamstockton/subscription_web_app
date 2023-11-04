import React, { useState, useEffect } from "react";

const ContentPage = () => {

  const [content, setContent] = useState(null);

  useEffect(() => {
    fetch("/content")
      .then(result => result.json())
      .then(resultJSON => setContent(resultJSON.message));
  }, []);

  return (
    <div>{content}</div>
  );
};

export default ContentPage;