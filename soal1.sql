select a.id as id, a.UserName as userName, m.UserName as ParentUserName
from user a
         left join user m ON
        m.Parent = a.id
