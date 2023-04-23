const newFormHandler = async (event) => {
  try {
    event.preventDefault();
    const title = document.querySelector('input[name="post-title"]').value;
    const post_text = document
      .querySelector('textarea[name="post-text"]')
      .value.trim();

    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        post_text,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(res.statusText);
    }
  } catch (err) {
    console.err(err);
    alert("An error has occurred. Please try again.");
  }
};

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);
