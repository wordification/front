declare namespace WordificationApi {
  type User = {
    id: string;
    email: string;
    username: string;
    dateJoined: string;
    spellingLevel: number;
    timePlayed: number;
    percentCorrect: number;
    accessToken: string;
    canManageStudents: boolean;
  };

  type LoginResponse = {
    user: {
      email: string;
      username: string;
      date_joined: string;
      last_login: string;
      is_admin: boolean;
      is_superuser: boolean;
      is_staff: boolean;
      is_active: boolean;
      is_student: boolean;
      is_teacher: boolean;
      first_name: string;
      last_name: string;
      spelling_level: number;
      time_played: number;
      percent_correct: number;
    };
    token: string;
  };
}
