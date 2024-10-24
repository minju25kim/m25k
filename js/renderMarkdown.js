document.addEventListener('DOMContentLoaded', () => {
    // Parse the query parameters from the URL
    const params = new URLSearchParams(window.location.search);
    const filePath = params.get('file');
    const subject = params.get('subject');

    if (filePath && subject) {
        // Set the page title based on the Markdown subject
        document.title = subject;

        // Fetch and render the Markdown content
        fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(markdown => {
                const htmlContent = marked.parse(markdown);
                document.getElementById('content').innerHTML = htmlContent;
            })
            .catch(error => console.error('Error loading the Markdown file:', error));
    } else {
        console.error('Missing required query parameters: file and subject');
    }
});
