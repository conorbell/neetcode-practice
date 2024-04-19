const program = () => {
  console.log('Program started');

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });

  console.log(promise);
  console.log('program in progress...');

  promise
    .then(() => {
      console.log('step1 complete');

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('step 2 complete');
        }, 6000);
      });
    })
    .then((val) => {
      console.log('val', val);
    });
};

program();
