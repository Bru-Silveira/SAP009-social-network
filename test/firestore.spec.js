import { getAuth } from 'firebase/auth';
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
  doc,
  arrayUnion,
  arrayRemove,
  deleteDoc,
  getDoc,
} from 'firebase/firestore';
import {
  newPost,
  getUserData,
  findPosts,
  like,
  likePosts,
  dislikePosts,
  deletePost,
  editPost,
  getPostById,
} from '../src/firebase/firestore.js';

jest.mock('firebase/auth');
jest.mock('firebase/firestore');
beforeEach(() => {
  jest.clearAllMocks();
});

describe('newPost', () => {
  it('should create a new post and add it to the collection in the database', async () => {
    const mockAuth = {
      currentUser: {
        displayName: 'test',
        uid: '62442',
      },
    };
    const mockAddDoc = 'addDoc';
    const mockCollection = 'collection';
    const textPost = 'hey there, test!';

    getAuth.mockReturnValueOnce(mockAuth);
    addDoc.mockReturnValueOnce(mockAddDoc);
    collection.mockReturnValueOnce(mockCollection);

    const mockPost = {
      userId: mockAuth.currentUser.uid,
      username: mockAuth.currentUser.displayName,
      post: textPost,
      likes: [],
    };
    await newPost(textPost);

    expect(addDoc).toHaveBeenCalledTimes(1);
    expect(addDoc).toHaveBeenCalledWith(mockCollection, expect.objectContaining(mockPost));
    expect(collection).toHaveBeenCalledTimes(1);
    expect(collection).toHaveBeenCalledWith(undefined, 'posts');
  });
});

describe('getUserData', () => {
  it('should return the users data', () => {
    const mockAuth = {
      currentUser: {
        uid: 12345,
      },
    };
    getAuth.mockReturnValueOnce(mockAuth);

    expect(getUserData()).toStrictEqual(mockAuth.currentUser);
  });
});

describe('findPosts', () => {
  it('should access the array of posts from the database', async () => {
    const mockOrderBy = 'order';
    orderBy.mockReturnValueOnce(mockOrderBy);
    const mockQuery = 'query';
    query.mockReturnValueOnce(mockQuery);
    const mockCollection = 'collection';
    collection.mockReturnValueOnce(mockCollection);
    onSnapshot.mockReturnValueOnce([
      {
        id: '1',
        data: () => ({ post: 'Post one' }),
      },
      {
        id: '2',
        data: () => ({ post: 'Post two' }),
      },
    ]);
    await findPosts();
    expect(orderBy).toHaveBeenCalledTimes(1);
    expect(orderBy).toHaveBeenCalledWith('date', 'desc');
    expect(collection).toHaveBeenCalledTimes(1);
    expect(collection).toHaveBeenCalledWith(undefined, 'posts');
    expect(query).toHaveBeenCalledTimes(1);
    expect(query).toHaveBeenCalledWith(mockCollection, mockOrderBy);
    expect(onSnapshot).toHaveBeenCalledTimes(1);
    expect(onSnapshot).toHaveBeenCalledWith(mockQuery, () => {});
  });
});

describe('likePosts', () => {
  it('should like the post clicked', async () => {
    updateDoc.mockResolvedValue();
    const mockDoc = 'doc';
    doc.mockReturnValueOnce(mockDoc);
    const mockUnion = 'union';
    arrayUnion.mockReturnValueOnce(mockUnion);

    const postId = 'post-id';
    const userId = 'nomeTeste';
    const post = {
      likes: mockUnion,
    };

    await likePosts(postId, userId);
    expect(doc).toHaveBeenCalledTimes(1);
    expect(doc).toHaveBeenCalledWith(undefined, 'posts', postId);
    expect(updateDoc).toHaveBeenCalledTimes(1);
    expect(updateDoc).toHaveBeenCalledWith(mockDoc, post);
    expect(arrayUnion).toHaveBeenCalledTimes(1);
    expect(arrayUnion).toHaveBeenCalledWith(userId);
  });
});

describe('dislikePosts', () => {
  it('should dislike the post clicked', async () => {
    updateDoc.mockResolvedValue();
    const mockDoc = 'doc';
    doc.mockReturnValueOnce(mockDoc);
    const mockUnion = 'union';
    arrayRemove.mockReturnValueOnce(mockUnion);
    const postId = 'post-id';
    const userId = 'nomeTeste';
    const post = {
      likes: mockUnion,
    };
    await dislikePosts(postId, userId);

    expect(doc).toHaveBeenCalledTimes(1);
    expect(doc).toHaveBeenCalledWith(undefined, 'posts', postId);
    expect(updateDoc).toHaveBeenCalledTimes(1);
    expect(updateDoc).toHaveBeenCalledWith(mockDoc, post);
    expect(arrayRemove).toHaveBeenCalledTimes(1);
    expect(arrayRemove).toHaveBeenCalledWith(userId);
  });
});

describe('like', () => {
  it('should check if the user liked or not the post', async () => {
    const mockPostId = 428039842093;
    const mockUserId = 123456;
    const mockPost = {
      likes: [123456],
    };

    await like(mockPostId, mockUserId);
    expect(dislikePosts).toHaveBeenCalledTimes(1);
    expect(dislikePosts).toHaveBeenCalledWith(mockPost);
    expect(dislikePosts).toHaveReturnedWith(false);
    expect(likePosts).toHaveBeenCalledTimes(1);
    expect(likePosts).toHaveBeenCalledWith(mockPost);
    expect(likePosts).toHaveReturnedWith(true);
  });
});

describe('deletePost', () => {
  it('should delete a post', async () => {
    const mockDoc = 'doc';
    doc.mockReturnValueOnce(mockDoc);
    deleteDoc.mockResolvedValueOnce();
    const postId = 'post-id';
    await deletePost(postId);
    expect(doc).toHaveBeenCalledTimes(1);
    expect(doc).toHaveBeenCalledWith(undefined, 'posts', postId);
    expect(deleteDoc).toHaveBeenCalledTimes(1);
    expect(deleteDoc).toHaveBeenCalledWith(mockDoc);
  });
});

describe('editPost', () => {
  it('should update a post', async () => {
    updateDoc.mockResolvedValue();
    const mockDoc = 'doc';
    doc.mockReturnValueOnce(mockDoc);
    const postId = 'post-id';
    const post = 'editContent';
    const updatePost = {
      post,
      editDate: new Date().toLocaleDateString('pt-BR'),
    };
    await editPost(postId, post);
    expect(doc).toHaveBeenCalledTimes(1);
    expect(doc).toHaveBeenCalledWith(undefined, 'posts', postId);
    expect(updateDoc).toHaveBeenCalledTimes(1);
    expect(updateDoc).toHaveBeenCalledWith(mockDoc, updatePost);
  });
});

describe('getPostById', () => {
  it('should access infos of a post by its id', async () => {
    const mockDoc = 'doc';
    doc.mockReturnValueOnce(mockDoc);
    const mockGetDoc = 'getDoc';
    getDoc.mockReturnValueOnce(mockGetDoc);
    const getPost = await getPostById();
    const postId = 'post-id';
    expect(getPost).toEqual([
      { id: '1', post: 'Post one' },
      { id: '2', post: 'Post two' },
    ]);
    expect(doc).toHaveBeenCalledTimes(1);
    expect(doc).toHaveBeenCalledWith(undefined, 'posts', postId);
    expect(getDoc).toHaveBeenCalledTimes(1);
    expect(getDoc).toHaveBeenCalledWith(undefined, 'posts');
  });
});
