import React from 'react';
import { Container, PostForm } from '../components';

function AddPost() {
    return (
        <div className="py-12 bg-gray-50 min-h-screen">
            <Container>
                <div className="bg-white p-8 shadow-lg rounded-lg border border-gray-200">
                    <h1 className="text-3xl font-semibold text-gray-800 mb-6">Add a New Post</h1>
                    <PostForm />
                </div>
            </Container>
        </div>
    );
}

export default AddPost;
