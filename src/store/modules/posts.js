import axios from 'axios'

const posts = {
  namespaced: true,
  state: {
      posts: [],
  },
   //where we update our state
  mutations: {
    SET_POSTS(state, data){
       state.posts = data
    },

  },
  
  //dispatch and commit our the mutation
  actions: {
      loadPosts({ commit }){
          axios
              .get('https://jsonplaceholder.typicode.com/comments')
              .then(res => commit('SET_POSTS', res.data))
              .catch(err => err.message)
      },
             
  },
  // getters: {},
}



export default posts