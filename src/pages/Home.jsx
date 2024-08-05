import React, { useEffect, useState } from 'react';
import appwriteService from '../appwrite/config';
import { Container, PostCard } from '../components';

function Home() {
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
            <div className="flex items-center justify-center w-full min-h-screen py-8 bg-gradient-to-r from-blue-200 to-purple-200">
                <div className="text-center">
                    <div className="loader" />
                    <p className="mt-4 text-blue-700">Loading posts...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center w-full min-h-screen py-8 bg-red-50">
                <div className="text-center">
                    <p className="text-red-700">{error}</p>
                </div>
            </div>
        );
    }

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 bg-green-50">
                <Container>
                    <div className="flex flex-col items-center">
                        <h1 className="text-2xl font-bold text-green-800">No posts available</h1>
                        <p className="mt-4 text-green-600">
                            It seems like there are no posts available at the moment.
                        </p>
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div className="w-full py-8 bg-blue-50">
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post) => (
                        <div key={post.$id} className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Home;
