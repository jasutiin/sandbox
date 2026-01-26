async function fetchStuff() {
  try {
    console.log('button click');
    const res = await fetch('http://localhost:8080/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const resJson = await res.text();
    console.log(resJson);
  } catch (error) {
    console.error(error);
  }
}

const myButton = document.getElementById('daButton');
myButton.addEventListener('click', fetchStuff);
