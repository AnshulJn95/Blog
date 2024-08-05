import React, { useEffect, useState } from 'react';
import { Container, PostForm } from '../components';
import appwriteService from '../appwrite/config';
import { useNavigate, useParams } from 'react-router-dom';

function EditPost() {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const { slug } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPost = async () => {
            if (slug) {
                try {
                    const fetchedPost = await appwriteService.getPost(slug);
                    if (fetchedPost) {
                        setPost(fetchedPost);
                    } else {
                        setError('Post not found');
                        navigate('/');
                    }
                } catch (err) {
                    setError('Failed to fetch post');
                } finally {
                    setLoading(false);
                }
            } else {
                navigate('/');
            }
        };

        fetchPost();
    }, [slug, navigate]);

    if (loading) {
        return (
            <div className="flex items-center justify-center w-full min-h-screen py-8">
                <div className="text-center">
                    <div className="loader" />
                    <p className="mt-4 text-gray-500">Loading post...</p>
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
        <div className="py-8">
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    );
}

export default EditPost;
