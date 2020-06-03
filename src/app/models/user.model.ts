class UserModel {
  id: number = 0;
  fullname: string;
  email: string;
  points: number = 0;
  receivePromotionalEmails: boolean;
  password: string;
  createdAt: string;
  phone: string;
  images: UserImageModel;
}

class UserImageModel {
  avatarSmPath: string;
  avatarMdPath: string;
  avatarLgPath: string;
}

export { UserModel, UserImageModel }
