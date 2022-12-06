async function getUser() {
    try {
      const response = await fetch('https://github.com/edhansa/Front_End/data.json', {
        method: 'POST',
        headers: {
          accept: 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
  
      const result = await response.json();
      return result;
    } catch (err) {
      console.log(err);
    }
  }
  
  getUser();