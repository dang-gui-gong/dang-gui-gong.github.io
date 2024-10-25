// Function to insert images into a container
function insertImages(containerId, imageList) {
  // Get the container element by the provided containerId
  const container = document.getElementById(containerId);

  // Clear the container first (if needed)
  container.innerHTML = '';

  // Folder path
  const folderPath = "img/";

  // Loop through the imageList and create img and filename elements
  imageList.forEach(function(image) {
    // Create a wrapper div for each image and its filename
    const wrapper = document.createElement('div');
    wrapper.style.textAlign = "center"; // Center image and filename
    wrapper.style.marginBottom = "10px"; // Add some space between images

    // Create a link element
    const link = document.createElement('a');
    link.href = folderPath + image;
    link.target = "_blank";

    // Create an image element
    const img = document.createElement('img');
    img.src = folderPath + image;
    img.alt = "Image";
    img.style.width = "100%";
    img.style.borderRadius = "5px";

    // Append image to the link
    link.appendChild(img);

    // Create a filename element
    const filename = document.createElement('p');
    filename.textContent = image.split('/')[1].split('.')[0]; // Show the image file name
    filename.style.fontSize = "12px"; // Set the font size for the filename
    filename.style.color = "#666"; // Optional: Set a grey color for the filename

    // Append the link and filename to the wrapper
    wrapper.appendChild(link);
    wrapper.appendChild(filename);

    // Append the wrapper to the container
    container.appendChild(wrapper);
  });
}

// Automatically fetch and insert images from HTML tag attributes
document.querySelectorAll('[data-image-list]').forEach(function (element) {
  const containerId = element.dataset.elementId;
  const imageList = JSON.parse(element.dataset.imageList);

  insertImages(containerId, imageList);
});
