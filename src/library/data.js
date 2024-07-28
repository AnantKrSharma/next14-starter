const posts = [
    { id: 1, userId: 1, title: 'Post no. 1', body: '.....' },
    { id: 2, userId: 2, title: 'Post no. 2', body: '.....' },
    { id: 3, userId: 3, title: 'Post no. 3', body: '.....' },
    { id: 4, userId: 4, title: 'Post no. 4', body: '.....' }
]

const users = [
    { id: 1, name: 'Naman Jain'},
    { id: 2, name: 'Akshit Kr Bharadwaj'},
    { id: 3, name: 'Anant Kr Sharma'}
]

export const getPosts = async () => {
    return posts;
} 

export const getPost = async (id) => {
    return posts.find((item) => item.id === id);
}

export const getUser = async (userId) => {
    return users.find((item) => item.id === userId);
}
