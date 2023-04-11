document.querySelector(".posts").append(
  ...Array.from({ length: 10 }, () => {
    return document.querySelector("#post-template").content.cloneNode(true);
  })
);
