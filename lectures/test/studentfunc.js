const supervise = (state) => ({
  supervise: (student) => {console.log(state.name + ' is supervising ' + student.name + '...')}
});

const examinate = (student) => {
  console.log('Examinating ' + student.name + '...');
};


module.exports = (name = 'N.N', age = '18') => {
  let state = {
    name,
    age
  };

  return Object.assign(
    state,
    supervise(state)
  );
};
