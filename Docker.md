# Docker 学习笔记（二）：docker 的安装和配置

## 1. 通过 yum 方式安装 docker：

### 注：记得修改镜像源

国外镜像一般很难访问，建议配置阿里云镜像。

```bash
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

### 1：更新 yum 源

```bash
sudo yum update
```

### 2、卸载旧版本(如果安装过旧版本的话)

```bash
sudo yum remove docker  docker-common docker-selinux docker-engine
```

还有

```bash
yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-selinux \
                  docker-engine-selinux \
                  docker-engine

rm -rf /etc/systemd/system/docker.service.d

rm -rf /var/lib/docker

rm -rf /var/run/docker
```

### 3、安装需要的软件包，

yum-util 提供 yum-config-manager 功能，另外两个是 devicemapper 驱动依赖的

```bash
sudo yum install -y yum-utils device-mapper-persistent-data lvm2
```

### 4、设置 yum 源

```bash
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
```

#### 4.1 如果 docker 官方源无法下载则更换为阿里源

```bash
sudo yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

### 5、可以查看所有仓库中所有 docker 版本，并选择特定版本安装

```bash
yum list docker-ce --showduplicates | sort -r
```

### 6、安装 docker

```bash
sudo yum install docker-ce  #由于repo中默认只开启stable仓库，故这里安装的是最新稳定版17.12.0
sudo yum install <FQPN>  # 例如：sudo yum install docker-ce-17.12.0.ce
```

### 7、启动并加入开机启动

```bash
sudo systemctl start docker
sudo systemctl enable docker
```

### 8、验证安装是否成功(有 client 和 service 两部分表示 docker 安装启动都成功了)

```bash
docker version
```

### 10.设置 docker 开机启动

```bash
sudo chkconfig docker on
```

## 2. docker 卸载

## 3. 安装 docker 的 Jenkins 镜像

### 1.先下载 Jenkins 的镜像

docker pull jenkinsci/blueocean

### 2.查看镜像

docker images

### 3.将镜像启动成容器

docker run -d \
--name jk -u root \
-p 9090:8080 \
-v /var/jenkins_home:/var/jenkins_home \
jenkinsci/blueocean
说明：
1，–name 是指定生成的容器名称。
2，最好使用 root 启动，以免有权限问题而启动失败。
3，-p 是端口的映射，冒号前边是宿主机的端口，冒号后边的是容器的端口。
4，-v 将 Jenkins 容器的 Jenkins_home 映射到宿主机的目录中，实现数据持续化。

### 4.查看启动的容器

docker ps
回显
CONTAINER ID IMAGE COMMAND CREATED STATUS PORTS NAMES
1ed814bcc271 jenkinsci/blueocean "/sbin/tini -- /usr/…" 9 seconds ago Up 7 seconds 50000/tcp, 0.0.0.0:9090->8080/tcp, :::9090->8080/tcp jk


那么加上我的 ip，就是访问的地址
这里有个问题，就是我没成功启动，因为阿里云需要加安全组的端口
加入后,继续用这个命令，但是每次 name 不能一样，
docker run -d \
--name jk1 -u root \
-p 9090:8080 \
-v /var/jenkins_home:/var/jenkins_home \
1ed814bcc271
### 5.给docker安装基本工具
这里我卡了好久，我以为docker会用到我本机里的工具啥的，
docker是会利用主机资源不是传统意义上的虚拟机，我理解的
但是不是的，仍需要装软件，因为我在后面的Jenkins中无法正常运行
#### 进入docker环境 jk1就是虚拟机名
docker exec -it jk1 bash
#### 1.终止容器
docker stop jk1
#### 2.查看终止容器
docker ps -a 来看终止状态的容器。
#### 3.重启容器
docker start jk1
#### 4.删除容器
docker rm 容器id
#### 5.导入容器
cat centos.tar | docker import - id
#### 6.导出容器
docker export xxxid > centos.tar
#### 安装node cnpm 
docker 的虚拟机用的apk包管理工具
apk search nodejs 查找有没有包
apk add nodejs npm
npm install cnpm
apk info -L nodejs 查看安装在什么地方
### 6.初入 Jenkins

参考 大佬的笔记
http://www.eryajf.net/701.html
https://www.cnblogs.com/nhdlb/p/12576273.html
https://www.cnblogs.com/linjiqin/category/1108912.html //docker
------------分割线------------
docker logs jk1 查看密码
#### 功能介绍
系统管理 
相当于workspace
home directory /var/lib/jenkins 
插件管理 pluginManager/
 /bin/sh -xe
cnpm install
npm run build

https://github.com/guopeng1129972/ant-design-vue-pro.git
whereis git
which git

ssh-keygen -t rsa -C "http://101.201.102.176:22/"

Jenkins重启 http://101.201.102.176:9090/exit