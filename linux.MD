# linux 命令

## 【例 1】重启与定时重启。

```bash
[root@localhost ~]# shutdown -r now
#重启, now是现在重启的意思
[root@localhost ~]# shutdown -r 05:30
#指定时间重启，但会占用前台终端
[root@localhost ~]# shutdown -r 05:30 &
#把定义重启命令放入后台，&是后台的意思
[root@localhost ~]# shutdown -c
//取消定时重启
[root@localhost ~]# shutdown -r +10
#10分钟之后重启
```

## 【例 2】关机和定时关机。

```bash
[root@localhost ~]# shutdown -h now
#现在关机
[root@localhost ~]# shutdown -h 05:30
#指定时间关机
```

## yum update 更新遇到错误

## 清除 yum 缓存

```bash
yum clean all
```
### yum的/repodata/repomd.xml错误的解决方法
Error: Failed to download metadata for repo 'epel': Cannot download repomd.xml: Cannot download repodata/repomd.xml: All mirrors were tried
#### 方法1：
cd  /etc/yum.repos.d/
vim Centos-报错名
将baseurl 添加一个  https://mirrors.aliyun.com/centos/$releasever/BaseOS/$basearch/os/
#### 还不行：
可能之前安装过，重复配置了，删除相关repo文件 即可


### 解决CentOS yum无法更新的问题
```bash
sed -i "s|enabled=1|enabled=0|g" /etc/yum/pluginconf.d/fastestmirror.conf

mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup

curl -o /etc/yum.repos.d/CentOS-Base.repo https://www.xmpan.com/Centos-6-Vault-Aliyun.repo

yum clean all

yum makecache

```

# tree
- 显示一级目录树 `tree -L 1 -d`
- 显示一级 二级目录树 `tree -L 2 -d`