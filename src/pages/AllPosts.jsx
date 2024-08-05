import React, { useState, useEffect } from 'react';
import { Container, PostCard } from '../components';
import appwriteService from '../appwrite/config';

function AllPosts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await appwriteService.getPosts();
                if (response) {
                    setPosts(response.documents);
                }
            } catch (err) {
                setError('Failed to load posts');
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center w-full min-h-screen py-8">
                <div className="text-center">
                    <div className="loader" />
                    <p className="mt-4 text-gray-500">Loading posts...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center w-full min-h-screen py-8">
                <div className="text-center">
                    <p className="text-red-600">{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="py-8 bg-gray-50">
            <Container>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <PostCard key={post.$id} {...post} />
                        ))
                    ) : (
                        <p className="text-center col-span-full text-gray-500">No posts available</p>
                    )}
                </div>
            </Container>
        </div>
    );
}

export default AllPosts;
