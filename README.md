# 📚 소규모 서점 온라인 도서 관리 시스템 (Fullstack Book App)

Spring Boot와 Next.js를 활용하여 개발한 간단한 풀스택 프로젝트이고 AWS로 배포했습니다.

배포 주소  
http://book-app-frontend1.eba-3tfjm3s6.ap-northeast-2.elasticbeanstalk.com/
---

## 🛠 기술 스택

### Backend
- **Framework:** Spring Boot 3.x
- **Language:** Java 21 (LTS)
- **Data:** Spring Data JPA, H2 In-Memory Database
- **Build Tool:** Gradle

### Frontend
- **Framework:** Next.js 15 (App Router), React 19
- **Styling:** Tailwind CSS
- **Language:** TypeScript

---

---

## 선택 트랙

Track B  
Elastic Beanstalk + RDS + CodePipeline

---

## 🌐 API 엔드포인트 목록

모든 API의 기본 베이스 주소는 `http://localhost:8080` 입니다.

| 기능 | 메서드 | URL | 반환 코드 | 설명 |
| :--- | :---: | :--- | :---: | :--- |
| **전체 도서 조회** | `GET` | `/api/books` | `200 OK` | 전체 도서 목록을 배열로 반환 |
| **단건 도서 조회** | `GET` | `/api/books/{id}` | `200 OK` / `404` | 특정 도서 조회 (없을 시 404 에러) |
| **새 도서 등록** | `POST` | `/api/books` | `201 Created` | 새로운 도서 정보 저장 (`@RequestBody`) |
| **도서 정보 수정** | `PUT` | `/api/books/{id}` | `200 OK` | 기존 도서의 제목, 저자, 가격, 상태 수정 |
| **도서 삭제** | `DELETE` | `/api/books/{id}` | `204 No Content` | 특정 도서 데이터 삭제 |

---

---

## 프로젝트 기능

- 도서 등록
- 도서 수정
- 도서 삭제
- 도서 목록 조회
- AWS 자동 배포

---
## 아키텍처

GitHub
  ↓
CodePipeline
  ↓
CodeBuild
  ↓
Elastic Beanstalk
  ↓
RDS
---
```text
## 🚀 실행 방법

### 1. 환경 변수 설정 (Frontend)
프론트엔드 폴더 최상위에 `.env.local` 파일을 생성하고 아래 내용을 입력합니다.
```text
NEXT_PUBLIC_API_URL=http://localhost:8080

# 백엔드 폴더로 이동 후 실행
./gradlew bootRun

# 프론트엔드 폴더로 이동 후 패키지 설치 및 실행
npm install
npm run dev
