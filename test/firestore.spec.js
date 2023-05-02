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
  deletePost,
  editPost,
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
  });
});

describe('like', () => {
  it('should add user like on a post if they havent liked it yet', async () => {
    const mockPostId = 428039842093;
    const mockUserId = 123456;
    const mockPost = {
      likes: [],
    };
    const mockDoc = 'doc';
    doc.mockReturnValue(mockDoc);
    getDoc.mockResolvedValueOnce({ data: () => mockPost });
    updateDoc.mockResolvedValueOnce();
    arrayUnion.mockReturnValueOnce([mockUserId]);

    const result = await like(mockPostId, mockUserId);

    expect(doc).toHaveBeenCalledTimes(2);
    expect(doc).toHaveBeenCalledWith(undefined, 'posts', mockPostId);
    expect(getDoc).toHaveBeenCalledTimes(1);
    expect(getDoc).toHaveBeenCalledWith(mockDoc);
    expect(updateDoc).toHaveBeenCalledTimes(1);
    expect(updateDoc).toHaveBeenCalledWith(mockDoc, { likes: [mockUserId] });
    expect(arrayUnion).toHaveBeenCalledTimes(1);
    expect(arrayUnion).toHaveBeenCalledWith(mockUserId);
    expect(result).toEqual({ liked: true, count: 1 });
  });

  it('should remove user like on a post if they have liked it already', async () => {
    const mockPostId = 428039842093;
    const mockUserId = 123456;
    const mockPost = {
      likes: [123456],
    };
    const mockDoc = 'doc';
    doc.mockReturnValue(mockDoc);
    getDoc.mockResolvedValueOnce({ data: () => mockPost });
    updateDoc.mockResolvedValueOnce();
    arrayRemove.mockReturnValueOnce([mockUserId]);

    const result = await like(mockPostId, mockUserId);

    expect(doc).toHaveBeenCalledTimes(2);
    expect(doc).toHaveBeenCalledWith(undefined, 'posts', mockPostId);
    expect(getDoc).toHaveBeenCalledTimes(1);
    expect(getDoc).toHaveBeenCalledWith(mockDoc);
    expect(updateDoc).toHaveBeenCalledTimes(1);
    expect(updateDoc).toHaveBeenCalledWith(mockDoc, { likes: [mockUserId] });
    expect(arrayRemove).toHaveBeenCalledTimes(1);
    expect(arrayRemove).toHaveBeenCalledWith(mockUserId);
    expect(result).toEqual({ liked: false, count: 0 });
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
