async function getUser() {
    try {
      const response = await fetch('data.json', {
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
