# 사용기술
- React
- Typescript 
-	Tailwind CSS
- Nextjs(프레임웍)
- Supabse(DB & 백엔드)
- Vercel(배포)


# 프로젝트 세팅

## Nextjs

```
 yarn create next-app calendar-booking-app --typescript
```


## Supabase(Postgres + Auth)

```
yarn add @supabase/supabase-js
```

### Supabase 환경파일 생성

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### Supabase 클라이언트 생성

```
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

## 라이브러리 

```
yarn add date-fns react-calendar
yarn add -D tailwindcss postcss autoprefixer
```

## Github

```
git init
git remote add origin https://github.com/mignonwhale/calendar-booking-app.git
git add .
git commit -m "init"
git push -u origin main
```

## Vercel

- 위 레파지토리 연결 후 배포 가능