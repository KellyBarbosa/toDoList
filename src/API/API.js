// eslint-disable-next-line import/no-anonymous-default-export
export default {
  editTask(taskData) {
    return fetch(`http://localhost:5000/tasks/${taskData.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskData),
    })
      .then((resp) => resp.json())
      .then((data) => {
        return data;
      })
      .catch((err) => console.log(err));
  },
  async loadData() {
    let data = await fetch('http://localhost:5000/tasks', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        //console.log(data);
        return data;
      })
      .catch((err) => console.log(err));

    //console.log('Data API: ',data);
    return data;
  },
  addTask(id, { title, priority }) {
    return fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id,
        title: title,
        priority: priority,
        isCompleted: false,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        return data;
        //navigate("/");
      })
      .catch((err) => console.log(err));
  },
  removeTask(taskData) {
    return fetch(`http://localhost:5000/tasks/${taskData.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        window.location.href = window.location.href;
      })
      .catch((err) => console.log(err));
  },
};
