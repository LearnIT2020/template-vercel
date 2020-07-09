FROM gitpod/workspace-full

RUN ["npm", "install", "-g", "http-server"]
RUN ["npm", "install", "-g", "vercel"]

USER gitpod
