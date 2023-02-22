declare namespace WordificationApi {
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
      first_name: string;
      last_name: string;
      spelling_level: number;
      time_played: number;
      percent_correct: number;
    };
    token: string;
  };
}
