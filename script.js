const form = document.getElementById(`form`);
form.addEventListener(`submit`, (e) => {
    e.preventDefault();
    console.log(e);
    fetch(`http://localhost:7777/video-request`, {
        method: `POST`,
        body: JSON.stringify({
            author_name: "khali",
            author_email: "mesbah@gmail.co",
            topic_title: "loda",
            target_level: "beginner",
            topic_details: "hi",
            expected_result: "hi",
        })
    }).then((data) => {
        console.log(data);
    });
});
